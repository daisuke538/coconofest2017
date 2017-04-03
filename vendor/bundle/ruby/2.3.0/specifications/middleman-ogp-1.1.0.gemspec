# -*- encoding: utf-8 -*-
# stub: middleman-ogp 1.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-ogp".freeze
  s.version = "1.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Atsushi Nagase".freeze]
  s.date = "2016-07-08"
  s.description = "OpenGraph Protocol Helper for Middleman".freeze
  s.email = ["a@ngs.io".freeze]
  s.homepage = "https://github.com/ngs/middleman-ogp".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.6.8".freeze
  s.summary = "OpenGraph Protocol Helper for Middleman".freeze

  s.installed_by_version = "2.6.8" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman-core>.freeze, [">= 3.2"])
    else
      s.add_dependency(%q<middleman-core>.freeze, [">= 3.2"])
    end
  else
    s.add_dependency(%q<middleman-core>.freeze, [">= 3.2"])
  end
end
