# -*- encoding: utf-8 -*-
# stub: middleman-deploy 2.0.0.pre.alpha ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-deploy".freeze
  s.version = "2.0.0.pre.alpha"

  s.required_rubygems_version = Gem::Requirement.new("> 1.3.1".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Tom Vaughan".freeze, "Karl Freeman".freeze]
  s.date = "2015-08-16"
  s.description = "Deploy a middleman built site over rsync, ftp, sftp, or git (e.g. gh-pages on github).".freeze
  s.email = ["thomas.david.vaughan@gmail.com".freeze, "karlfreeman@gmail.com".freeze]
  s.homepage = "https://github.com/karlfreeman/middleman-deploy".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3".freeze)
  s.rubygems_version = "2.6.8".freeze
  s.summary = "Deploy a middleman built site over rsync, ftp, sftp, or git (e.g. gh-pages on github).".freeze

  s.installed_by_version = "2.6.8" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman-core>.freeze, [">= 3.2"])
      s.add_runtime_dependency(%q<ptools>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<net-sftp>.freeze, [">= 0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.5"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<kramdown>.freeze, [">= 0.14"])
      s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.19"])
      s.add_development_dependency(%q<pry>.freeze, [">= 0"])
      s.add_development_dependency(%q<yard>.freeze, [">= 0"])
    else
      s.add_dependency(%q<middleman-core>.freeze, [">= 3.2"])
      s.add_dependency(%q<ptools>.freeze, [">= 0"])
      s.add_dependency(%q<net-sftp>.freeze, [">= 0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.5"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<kramdown>.freeze, [">= 0.14"])
      s.add_dependency(%q<rubocop>.freeze, ["~> 0.19"])
      s.add_dependency(%q<pry>.freeze, [">= 0"])
      s.add_dependency(%q<yard>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<middleman-core>.freeze, [">= 3.2"])
    s.add_dependency(%q<ptools>.freeze, [">= 0"])
    s.add_dependency(%q<net-sftp>.freeze, [">= 0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.5"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<kramdown>.freeze, [">= 0.14"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.19"])
    s.add_dependency(%q<pry>.freeze, [">= 0"])
    s.add_dependency(%q<yard>.freeze, [">= 0"])
  end
end
