# CLAUDE.md — AI Assistant Guide for 0to5k

## Project Overview

**0to5k** (Zero aos 5KM) is a 15-week running progression program designed for sedentary and smoking individuals. It is **not a software application** — it is a content-driven, documentation-and-spreadsheet project with no backend, API, database, or build system.

- **Owner**: Gabriel Ramos
- **Version**: 1.1.0
- **Language**: Portuguese (Brazilian), with English filenames
- **Repository**: `github.com/prof-ramos/0to5k`

## Repository Structure

```text
0to5k/
├── CLAUDE.md                           ← This file
├── ARCHITECTURE.md                     ← Technical/architectural overview
├── README.md                           ← Main program documentation (science, protocol, FAQ)
├── .gitignore
├── assets/
│   └── images/
│       └── banner.png                  ← Visual banner used in README.md
├── data/
│   └── planilha_zero_aos_5km.xlsx      ← Core spreadsheet (3 worksheets, no formulas)
└── docs/
    ├── INDEX.md                        ← Navigation index for all docs
    ├── EXECUTIVE_SUMMARY.md            ← Stakeholder-level overview
    ├── GETTING_STARTED.md              ← End-user quick-start guide
    ├── PROJETO_FINAL.txt               ← Final project state snapshot
    └── estrutura_planilha_zero_aos_5km.md  ← Spreadsheet schema reference
```

**Total**: 11 tracked files. No source code, no dependencies, no CI/CD.

## Architecture

- **Local-first**: All data stays on the user's device. No telemetry, no cloud sync.
- **Spreadsheet-centric**: `data/planilha_zero_aos_5km.xlsx` is the operational core (3 sheets: Plano de Treinos, Dicas & Protocolo, Resumo Semanal). It has zero formulas — all data entry and consolidation is manual.
- **Documentation as interface**: Markdown files provide guidance, navigation, and scientific context. There is no UI or app.

## Key Conventions

### Content language

All user-facing documentation content is written in **Brazilian Portuguese**. File names and Git metadata use English. When editing docs, maintain Portuguese for body content.

### File paths

All internal cross-references use **repo-root-relative paths** without leading `./`:
- `data/planilha_zero_aos_5km.xlsx` (correct)
- `docs/GETTING_STARTED.md` (correct)
- `./docs/GETTING_STARTED.md` (incorrect — do not use)

### Documentation cross-references

Files reference each other extensively. The trust map is:
- `docs/INDEX.md` is the central navigation hub — it must list every doc file.
- `README.md` references `docs/GETTING_STARTED.md`, `docs/INDEX.md`, the spreadsheet, and the banner image.
- `ARCHITECTURE.md` references the spreadsheet and all docs.
- Changes to file names or paths **must** be updated in all referencing files.

### Scientific references

The program cites 7 peer-reviewed studies. The detailed citation table appears in `README.md`; `docs/GETTING_STARTED.md` links back to `README.md` for the full references. Do not alter citations without verifying accuracy. The studies are:
- Ooms L et al. (2013), Relph N et al. (2023), Lavie CJ et al. (2022, Parts I & II), Biswas A et al. (2024), Haasova M et al. (2018), Kessler HS et al. (2014)

### Spreadsheet structure

The spreadsheet schema is documented in `docs/estrutura_planilha_zero_aos_5km.md`. Key details:
- **Sheet 1 (Plano de Treinos)**: Columns A–K, rows up to 70. Training rows follow the pattern: 3 sessions per week + 1 blank separator. Week N starts at row `5 + (N-1)*4`.
- **Sheet 2 (Dicas & Protocolo)**: Tips organized in 5 sections with icon/title/explanation columns.
- **Sheet 3 (Resumo Semanal)**: Weekly summary with 7 columns, 15 data rows (weeks 1–15).
- There are **no formulas, no validations, no named ranges**. Consistency is purely manual.

### Program structure (training protocol)

The 15-week program has 4 phases with 3 sessions per week:
- **FASE 0** (Weeks 1–3): Walking only, 20–30 min
- **FASE 1** (Weeks 4–7): Short running intervals introduced (30s–1m30s)
- **FASE 2** (Weeks 8–11): Building aerobic base (2–8 min continuous)
- **FASE 3** (Weeks 12–15): Continuous running toward 30 min / 5 km

Target effort zone: PSE 5–6 (can speak short sentences but winded).

## Development Workflow

### No build or test system

There is no package manager, build tool, linter, or test suite. The project is pure documentation and a spreadsheet.

### Git conventions

- Commit messages are in English, concise, and descriptive.
- Commit history shows a pattern of: `type: description` (e.g., `docs: normalize architecture and documentation references`, `chore: ignore local debug artifact file`).
- The `.gitignore` excludes OS artifacts, Office temp files (`~$*`), agent directories (`.gemini/`, `.agent/`, `.antigravity/`), log files, and a specific debug artifact.

### Making changes

When modifying this repository:

1. **Documentation edits**: Ensure all cross-references remain valid. Check `docs/INDEX.md`, `README.md`, `ARCHITECTURE.md`, and `docs/EXECUTIVE_SUMMARY.md` for any paths or file lists that need updating.
2. **Adding new files**: Update `docs/INDEX.md` (navigation), `ARCHITECTURE.md` (structure tree), and `docs/EXECUTIVE_SUMMARY.md` (artifact inventory).
3. **Spreadsheet changes**: Update `docs/estrutura_planilha_zero_aos_5km.md` to reflect the new schema. Verify that `README.md` and `docs/GETTING_STARTED.md` remain consistent with any protocol changes.
4. **Renaming or moving files**: Search all Markdown files for references to the old path and update them.

### Safety-critical content

This project contains health and exercise guidance for vulnerable populations (sedentary individuals and smokers). When editing:

- Do not weaken safety warnings (chest pain, dizziness, irregular heartbeat, severe breathlessness).
- Preserve the 2-hour smoke-free window guidance before/after training.
- Maintain the mandatory medical evaluation prerequisite.
- Do not increase training intensity beyond the documented conservative progression.
- Keep the PSE 5–6 target zone; levels 7+ are explicitly marked as too intense.

## Known Limitations

1. Manual consistency between the 3 spreadsheet sheets — no formulas enforce correctness.
2. No automated integration with running apps (Strava, Garmin, Nike Run Club, etc.).
3. No CI/CD pipeline for link validation or documentation checks.

## Useful Commands

```bash
# Clone the repository
git clone https://github.com/prof-ramos/0to5k.git

# Check for broken internal Markdown links (manual — no tooling installed)
grep -rnoP '\[[^\]]+\]\((?!http)[^)]+\.md\)' *.md docs/*.md

# List all files tracked by git
git ls-files
```
