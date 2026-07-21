# Torah Reading Handouts

Generates the Word handouts used at Chavurat Or'Leans Shabbat services: each
verse in Hebrew (with vowels and cantillation) followed by its English
translation, grouped under 1st/2nd/3rd Aliyah headers.

## Usage

```bash
python build_handout.py --date 2026-10-24 --date 2026-11-07
```

Output lands in `handouts/` as `YYYY.MM.DD - <Parsha>.docx`, ready to print
or upload to the Google Drive folder.

Options:

- `--date YYYY-MM-DD` — the service date (repeat for several services). Must
  be a regular Shabbat; on holidays with no triennial reading the script
  stops and says so.
- `--aliyot N` — how many triennial aliyot to include (default 3, the
  chavurah's practice).
- `--out DIR` — output directory (default `handouts/`).

## How it works

1. **Hebcal** (`hebcal.com/leyning`) supplies the parsha for the date and the
   triennial-cycle aliyah verse ranges. These have matched the chavurah's
   planning spreadsheet exactly.
2. **Sefaria** supplies the text: Hebrew from *Miqra according to the
   Masorah* (the default, fully cantillated edition) and English from *The
   Contemporary Torah, JPS 2006* (the gender-sensitive edition that renders
   the divine name as יהוה). Footnotes are stripped.
3. **python-docx** lays it out: Times New Roman throughout, centered 14pt
   parsha title, centered bold 12pt aliyah headers, 16pt RTL Hebrew, 12pt
   English — the same format as the sheets in the Drive "Sefaria Source
   Sheets" folder (first used for Tazria-Metzora, April 18, 2026).

## Requirements

```bash
pip install python-docx
```

Network access to hebcal.com and sefaria.org.
