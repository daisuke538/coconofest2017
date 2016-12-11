# -*- encoding: utf-8 -*-
# stub: fspath 2.1.1 ruby lib

Gem::Specification.new do |s|
  s.name = "fspath".freeze
  s.version = "2.1.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Ivan Kuchin".freeze]
  s.date = "2014-12-26"
  s.homepage = "http://github.com/toy/fspath".freeze
  s.licenses = ["MIT".freeze]
  s.rubyforge_project = "fspath".freeze
  s.rubygems_version = "2.6.8".freeze
  s.summary = "Better than Pathname".freeze

  s.installed_by_version = "2.6.8" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.28"])
    else
      s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_dependency(%q<rubocop>.freeze, ["~> 0.28"])
    end
  else
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.28"])
  end
end
