# Here you will find all my slides as code for my conferences

## AI as lib

  - [France DevOps 2025](./ai-as-lib/france-devops-2025/)
  - [Fac Tours 2025](./ai-as-lib/fac-tours-2025/)
  - [Confoo 2025](./ai-as-lib/confoo-2025/)
  - [Apside Camp 2024](./ai-as-lib/apside-camp-2024/)
  - [INNOVTECH CGI 2024](./ai-as-lib/cgi-2024/)

## AI in few minutes

  - [CNCF Lorient 2024](./ai-in-few-minutes/cncf-lorient-2024/)

## Java full stack

  - [Devoxx France 2025](./java-full-stack/devoxx-fr-2025/)

## JBang

  - [DevFest Nantes 2025](https://docs.google.com/presentation/d/e/2PACX-1vRF50mgvW6KzZf6lspATsmJRfTU79-CdlyDO8JP23f6ZldfvSGCkxe7wRwy9WaQMfD3EVqza0q5ukkB/pub)
  - [DevQuest Niort 2025](./jbang/devquest-niort-2025/)
  - [Devoxx France 2025](./jbang/devoxx-fr-2025/)

## Jarvis
  - [Devoxx 2025](./jarvis/devoxx-2025/)
  - [JUG Summer Camp 2025](./jarvis/jsc-2025/)
  - [Lava JUG 2025](./jarvis/lavajug-2025/)
  - [Devoxx UK 2025](./jarvis/devoxx-uk-2025/)
  - [Programmez Magazine 2025](./jarvis/programmez-2025/)
  - [Confoo 2025](./jarvis/confoo-2025/)
  - [Bordeaux JUG 2024](./jarvis/bordeaux-jug-2024/)
  - [Volcamp 2024](./jarvis/volcamp-2024/)
  - [Volcamp 2024](./jarvis/volcamp-2024/)
  - [Riviera Dev 2024](./jarvis/riviera-dev-2024/)
  - [Voxxed Days Lux 2024](./jarvis/voxxed-days-lux-2024/)
  - [Devoxx FR 2024](./jarvis/devoxx-fr-2024/)
  - [Snowcamp 2024](./jarvis/snowcamp-2024/)
  - [OSXP 2023 ](./jarvis/osxp-2023/)  

---

## Publish an edition

Each edition of a talk is published here by a GitHub Actions workflow run from the talk repository, not by hand:
`<talk>/<edition>/index.html` (links to each language) and `<talk>/<edition>/<lang>/` (`slidesk save -l <lang>` export).
The workflow also adds the edition at the top of the talk section of this README.

- Reusable workflow: [`.github/workflows/publish-talk.yml`](.github/workflows/publish-talk.yml) (SliDesk version, theme install, one export per language, index page, commit).
- In the talk repository: a `workflow_dispatch` workflow that calls it, and a `TALKS_PUBLISH_TOKEN` secret (fine-grained token: read on the theme repository, read and write on this one).
- URL of an edition (the "Slides" QR code of the last slide): `https://philippart-s.github.io/talks-slides/<talk>/<edition>/`.
