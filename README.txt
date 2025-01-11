_config.yml: The configuration file for your Jekyll site. It sets up site-wide settings like title, author, plugins, and other configurations.
_layouts/: Contains layout templates that define the structure of your pages.
_includes/: Holds reusable snippets of HTML that can be included in your layouts or other includes.
_posts/: Where your blog posts are stored. Each file represents a post.
css/ and js/: Directories for your custom CSS and JavaScript files.
index.md: The homepage of your site.
archive.md: A page that lists your posts, organized by tags.


## How These Files Work Together

- **Layouts and Includes**:
  - The `post.html` layout is applied to each blog post in `_posts/`.
  - The layout uses includes like `head.html` for the `<head>` section, `navlinks.html` for navigation, and `sharelinks.html` for social sharing.

- **Posts Rendering**:
  - Each Markdown file in `_posts/` is processed by Jekyll.
  - The content is inserted into the `{{ content }}` section of the `post.html` layout.
  - The `post.html` layout defines how the post is displayed, including the title, date, author, and content.

- **Assets (CSS and JavaScript)**:
  - `override.css` provides custom styles that override the default theme.
  - JavaScript files under `js/highlightjs/` are used for syntax highlighting code blocks in your posts.

## Adding a "Research" Section

To create a new "Research" section that functions similarly to your "Posts" section, you can use Jekyll's **collections** feature.

### 1. Configure the "Research" Collection

Add the following to your `_config.yml` to define the new collection:

