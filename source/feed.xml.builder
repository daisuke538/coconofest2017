xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  site_url = "http://coconofest.asia/"
  xml.title "cocono fest."
  xml.subtitle "ここから始まる、九州ミュージックムーブメント"
  xml.id URI.join(site_url, blog.options.prefix.to_s)
  xml.link "href" => URI.join(site_url, blog.options.prefix.to_s)
  xml.link "href" => URI.join(site_url, current_page.path), "rel" => "self"
  xml.updated(blog.articles.first.date.to_time.iso8601) unless blog.articles.empty?
  #xml.author { xml.name "Blog Author" }

  blog.articles[0..5].each do |article|
    xml.entry do
      xml.title article.data.title_jp
      xml.link "rel" => "alternate", "href" => URI.join(site_url, article.url)
      xml.id URI.join(site_url, article.url)
      xml.published article.date.to_time.iso8601
      xml.updated File.mtime(article.source_file).iso8601
      #xml.author { xml.name "Article Author" }
      # xml.summary article.summary, "type" => "html"
      xml.content article.body, "type" => "html"
    end
  end
end
