---
categories: [Demo, How To]
description: Markdown is a lightweight markup language used for creating formatted text using plain text. This post contains all the basic Markdown syntax you will need.
excerpt_separator: <!--end_excerpt-->
post_title: Markdown Syntax
tags: [Markdown, Syntax]
---

Markdown was created by John Gruber in 2004 as an easy-to-read markup language. It is a popular and widely used markup language. Most repositories have a README.md file in their root which are used to give quick and easy information about the repository in question. A markup language is a text-encoding system which follows rules to format the display of the base text.

To display Markdown, the client (website, app, GitHub, Discord, etc.) must parse the plain text using a parser (some library that knows the Markdown rules). This parser transforms it into another format. Usually this is into HTML but it can be other structured formats such as rich text. Markdown itself isn’t a single strict standard. There's Gruber's *vanilla* Markdown but also other *flavors* such as GitHub Flavored Markdown (GFM), CommonMark, etc. That’s why Markdown doesn’t always look the same everywhere.

## Headings

## H2 - heading
{: data-toc-skip='' }

### H3 - heading
{: data-toc-skip='' }

#### H4 - heading
{: data-toc-skip='' }

##### H5 - heading
{: data-toc-skip='' }

###### H6 - heading
{: data-toc-skip='' }

```Example
# For an example of H1 view the heading of this post. 
## H2 - heading
### H3 - heading
#### H4 - heading
##### H5 - heading
###### H6 - heading
```

## Paragraphs

Paragraphs are straight forward. Type without adding any syntax and Markdown will wrap the paragraph in a \<p\> HTML tag. Do not indent paragraphs with spaces or tabs. This can result in unexpected formatting problems.

## Line Breaks

To add line breaks in a paragraph you merely need to add two spaces at the end of a line.  
A \<br\> HTML tag will be added and the new line will remain in the same paragraph.

```Example
Line 1. Select text to see 2 space characters at the end.  
Line 2
```

## Bold Text

**To bold text you wrap the text with two asterisks in the front and the back.**

```Example
**Bold Text**
```

## Italic Text

*To italicize text you wrap the text with one asterisk in the front and the back.*

```Example
*Italicized Text*
```

## Block quotes

To create a block quote add a \> in front of the text.

> This is a block quote.

> This block quote contains multiple paragraphs.
>
> The second paragraph.

```Example
> This is a block quote.

> This block quote contains multiple paragraphs.
>
> The second paragraph.
```

## Lists

### Ordered Lists

1. The first item in an ordered list.
2. Item 2.
3. Item 3.

```Example
1. The first item in an ordered list.
2. Item 2.
3. Item 3.
```

### Unordered Lists

- The first item in an unordered list.
- Item 2.
- Item 3.

```Example
- The first item in an ordered list.
- Item 2.
- Item 3.
```

## Code

`To mark text as code wrap it in backticks.`

```Example
`To mark text as code wrap it in backticks.`
```

## Code Blocks

```Example
    ```
To mark multiple lines as a code block.
Wrap the lines with three backticks above and below the text.
But don't add indentation.
    ```
```

## Horizontal Rules

To add a horizontal rule add three dashes on a line by themselves.

---

```Example
---
```

## Links

[A link to further Markdown syntax](https://www.markdownguide.org/)

```Example
[A link to further Markdown syntax](https://www.markdownguide.org/)
```

## Tables

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
| Header      | Title       |
| Paragraph   | Text        |

```Example
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
| Header      | Title       |
| Paragraph   | Text        |
```