---
title: 'Monash University - Markdown Notes Repository'
author: 'Novin Noori'
date: '2023-12-18'
tags:
  - monash
---

## Introduction

This repository contains all the notes I have taken during my studies at Monash
University. The notes are written in Markdown and are converted to PDF using
Pandoc. The notes are written in a way that they can be easily converted to PDF,
HTML, or any other format supported by Pandoc.

## Course Code

- ITO4137 - Architecture and networks TP1-24

## Folder Structure

The folder structure is as follows:

```zsh
├───.github
│   └───workflows
├───.vscode
├───src
│   ├───ITO4137
│   │   ├───Module 0
│   │   ├───Module 1
│   │   ├───Module 2
│   │   ├───Module 3
│   │   ├───Module 4
│   │   ├───Module 5
│   │   ├───Module 6
```

## How to use

1. Clone the repository

```zsh
git clone <repo-url>
```

2.Install the dependencies

```zsh
npm install
```

3.Run the script

```zsh
# macOS
npm run build && open ./dist/output.pdf -a Preview

# Windows
npm run build && start ./dist/output.pdf
```

## Contributing

Pull requests are welcome.
