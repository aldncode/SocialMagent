---
title: "Sample draft: a short post layout"
description: "This is a draft sample post. It is not built into the live site, but it shows the frontmatter, hero image, tags and author box."
pubDate: 2026-11-01
tags: ["Sample", "Writing"]
heroImage: "../../assets/blog/hero-careers.jpg"
draft: true
sources:
  - title: "Example source: Astro documentation"
    url: "https://docs.astro.build/"
---

This post is deliberately marked `draft: true` in its frontmatter. Draft posts are excluded from the blog index, tag pages, RSS feed, sitemap and production build.

## Why keep a draft post in the repo?

Keeping a draft in the repository lets you see how the layout behaves with real content before you publish. It also gives you a safe place to write without exposing unfinished work to visitors.

## What happens when you publish

Change `draft: true` to `draft: false` (or remove the line entirely). The post will appear in the blog index, the RSS feed and the sitemap the next time the site is built.

## A note on sample content

This is a layout sample, not a finished article. Replace it with your own draft or delete the file. Do not leave "sample" wording in a live post.

The author box, reading time, tags and related posts are generated automatically from the post's frontmatter and content.
