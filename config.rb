###
# Page options, layouts, aliases and proxies
###

set :slim, { :pretty => true, :sort_attrs => false, :format => :html5 }

set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"

# Blog settings
set :site_url, 'http://coconofest.asia'
set :site_title, 'cocono fest.'
set :site_description, '福岡で開催されるフェス「cocono fest.」の公式WEBサイト'
set :reverse_title, true
#set :social_links,
#    twitter: 'https://twitter.com/coconofest'

# Markdown settings
set :markdown_engine, :kramdown
set :markdown,
    layout_engine: :slim,
    tables: true,
    autolink: true,
    smartypants: true,
    input: "GFM"

# Slim settings
set :slim,
    :format => :html,
    :sort_attrs => false,
    :pretty => true
#    :shortcut => {
#      "#" => {:tag => "div", :attr => "id"},
#      "." => {:tag => "div", :attr => "class"},
#      "&" => {:tag => "input", :attr => "type"}
#    }

#page "404.html", :directory_index => false
activate :directory_indexes

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page "/feed.xml", layout: false
page "/sitemap.xml", layout: false
page "/robots.txt", layout: false
page "/category.html", layout: "list_layout"
page "/tag.html", layout: "list_layout"
# page "/calendar.html", layout: ""

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"
  blog.permalink = "{category}/{title}/index.html"
  # Matcher for blog source files
  blog.sources = "posts/{year}/{month}/{day}/{title}/index.html"
  blog.taglink = "tags/{tag}/index.html"
  blog.layout = "layouts/article_layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  blog.year_link = "{year}/index.html"
  blog.month_link = "{year}/{month}/index.html"
  blog.day_link = "{year}/{month}/{day}/index.html"
  blog.default_extension = ".md"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"

  blog.custom_collections = {
    category: {
      link: "/{category}/index.html",
      template: "/category.html"
    }
  }
end

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

helpers do
  # カテゴリー一覧を取得するヘルパー
  def get_taxonomies( slug = 'category' )
    list = []
    blog.articles.select{ |i| i.data[slug].present? }.each do |article|
      list = list.push article.data[slug]
    end

    return list.inject( Hash.new(0) ){|hash, a| hash[a] += 1; hash}
  end
end

#activate :external_pipeline,
#  name: :gulp,
#  command: build? ? './node_modules/gulp/bin/gulp.js' : './node_modules/gulp/bin/gulp.js watch',
#  source: "source"

# Build-specific configuration
configure :build do
  # Minify HTML on build
  activate :minify_html, :remove_quotes => false, :remove_intertag_spaces => true

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  #activate :gzip

  activate :asset_hash

  # middleman build 実行後に gulp build を実行する
  after_build do
    system( 'gulp imagemin' )
    system( 'gulp build' )
  end
end

# デプロイ設定
#activate :deploy do |deploy|
#  deploy.build_before = true
#  deploy.deploy_method = :git
#  deploy.method = :git
#  deploy.branch = 'gh-pages'
#end
