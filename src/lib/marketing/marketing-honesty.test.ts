import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import { describe, expect, it } from 'vitest'

const ROOT = join(__dirname, '../../..')

const SCAN_DIRS = ['app', 'components', 'src/content', 'lib']
const SCAN_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx'])

/** Paths that may discuss forbidden phrases in test assertions only */
const IGNORE_PATH_FRAGMENTS = [
  'marketing-honesty.test.ts',
  'node_modules',
  '.next',
]

/**
 * Forbidden marketing claims. If any match site copy (outside this file),
 * the build should fail.
 */
export const FORBIDDEN_CLAIM_PATTERNS: { id: string; pattern: RegExp }[] = [
  { id: 'soc2-controls', pattern: /SOC\s*2\s+controls/i },
  { id: 'soc2-readiness', pattern: /SOC\s*2\s+Readiness/i },
  { id: 'soc2-in-progress', pattern: /SOC\s*2\s+Type\s*II\s*[—–-]?\s*In\s+Progress/i },
  { id: 'soc2-actively-working', pattern: /actively working toward SOC\s*2/i },
  { id: 'hours-saved', pattern: /40\+\s*hours?\s+saved/i },
  { id: 'cost-reduction', pattern: /75%\s+cost\s+reduction/i },
  { id: '3x-faster', pattern: /3x\s+faster\s+exam\s+prep/i },
  { id: 'under-10-minutes', pattern: /under\s+10\s+minutes/i },
  { id: 'finalize-lt-10', pattern: /Finalize records in\s*<\s*10\s*minutes/i },
  { id: 'in-minutes-claim', pattern: /(?:get this output in minutes|audit packs in minutes|— in minutes|– in minutes)/i },
  { id: 'fca-also-supports', pattern: /Also supports UK FCA/i },
  { id: 'google-meet', pattern: /Google Meet/i },
  { id: 'webex', pattern: /\bWebex\b/i },
  { id: 'crm-wealthbox', pattern: /Wealthbox/i },
  { id: 'crm-redtail', pattern: /Redtail/i },
  { id: 'crm-salesforce', pattern: /Salesforce/i },
  { id: 'sso-feature', pattern: /CRM integration \(Wealthbox|name:\s*'SSO'/i },
  { id: 'wrong-company-number', pattern: /16889706/ },
  { id: 'worm-planned', pattern: /WORM\s+Retention[\s\S]{0,40}Planned/i },
  { id: 'methodology-link', pattern: /See methodology/i },
  { id: 'calculate-savings', pattern: /Calculate Your Savings/i },
  { id: 'aum-100m-icp', pattern: /\$100M\+\s*AUM/i },
  { id: 'state-registered-only-exclude', pattern: /State-registered only \(no SEC/i },
]

function shouldIgnore(path: string): boolean {
  return IGNORE_PATH_FRAGMENTS.some((fragment) => path.includes(fragment))
}

function collectFiles(dir: string, acc: string[] = []): string[] {
  let entries: string[] = []
  try {
    entries = readdirSync(dir)
  } catch {
    return acc
  }

  for (const entry of entries) {
    const full = join(dir, entry)
    if (shouldIgnore(full)) continue
    const st = statSync(full)
    if (st.isDirectory()) {
      collectFiles(full, acc)
    } else if (SCAN_EXTS.has(extname(full))) {
      acc.push(full)
    }
  }
  return acc
}

describe('marketing honesty', () => {
  const files = SCAN_DIRS.flatMap((dir) => collectFiles(join(ROOT, dir)))

  it('scans marketing source files', () => {
    expect(files.length).toBeGreaterThan(10)
  })

  for (const { id, pattern } of FORBIDDEN_CLAIM_PATTERNS) {
    it(`forbids claim: ${id}`, () => {
      const hits: string[] = []
      for (const file of files) {
        const text = readFileSync(file, 'utf8')
        if (pattern.test(text)) {
          hits.push(file.replace(ROOT + '/', ''))
        }
      }
      expect(hits, `Forbidden pattern ${id} found in:\n${hits.join('\n')}`).toEqual([])
    })
  }

  it('uses corrected Companies House number 16989706 in legal copy', () => {
    const legalFiles = files.filter((f) =>
      /Footer|about|terms|privacy/i.test(f)
    )
    const withCorrect = legalFiles.filter((f) =>
      readFileSync(f, 'utf8').includes('16989706')
    )
    expect(withCorrect.length).toBeGreaterThan(0)
  })

  it('forbids em dashes in body-facing marketing components', () => {
    const componentFiles = collectFiles(join(ROOT, 'components')).filter(
      (f) => !f.includes('marketing-honesty')
    )
    const hits: string[] = []
    for (const file of componentFiles) {
      const text = readFileSync(file, 'utf8')
      // Unicode em dash in string literals / JSX text
      if (/—/.test(text)) {
        hits.push(file.replace(ROOT + '/', ''))
      }
    }
    expect(hits, `Em dashes found in:\n${hits.join('\n')}`).toEqual([])
  })
})
