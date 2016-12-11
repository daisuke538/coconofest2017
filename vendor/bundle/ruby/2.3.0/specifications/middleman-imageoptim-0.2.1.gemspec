# -*- encoding: utf-8 -*-
# stub: middleman-imageoptim 0.2.1 ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-imageoptim".freeze
  s.version = "0.2.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Justin Morris".freeze]
  s.date = "2015-03-18"
  s.description = "Small images are small! Compress yours during middleman build.".freeze
  s.email = ["desk@pixelbloom.com".freeze]
  s.homepage = "https://github.com/plasticine/middleman-imageoptim".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.6.8".freeze
  s.summary = "Small images are small! Compress yours during middleman build.".freeze

  s.installed_by_version = "2.6.8" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman-core>.freeze, [">= 3.1"])
      s.add_runtime_dependency(%q<image_optim>.freeze, ["~> 0.20.2"])
      s.add_runtime_dependency(%q<image_optim_pack>.freeze, ["~> 0.2.1"])
      s.add_development_dependency(%q<appraisal>.freeze, [">= 0"])
      s.add_development_dependency(%q<aruba>.freeze, [">= 0"])
      s.add_development_dependency(%q<cucumber>.freeze, [">= 0"])
      s.add_development_dependency(%q<pry>.freeze, [">= 0"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec>.freeze, [">= 3.0.0"])
      s.add_development_dependency(%q<rspec-its>.freeze, [">= 0"])
      s.add_development_dependency(%q<rubocop>.freeze, [">= 0"])
      s.add_development_dependency(%q<simplecov>.freeze, [">= 0"])
    else
      s.add_dependency(%q<middleman-core>.freeze, [">= 3.1"])
      s.add_dependency(%q<image_optim>.freeze, ["~> 0.20.2"])
      s.add_dependency(%q<image_optim_pack>.freeze, ["~> 0.2.1"])
      s.add_dependency(%q<appraisal>.freeze, [">= 0"])
      s.add_dependency(%q<aruba>.freeze, [">= 0"])
      s.add_dependency(%q<cucumber>.freeze, [">= 0"])
      s.add_dependency(%q<pry>.freeze, [">= 0"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, [">= 3.0.0"])
      s.add_dependency(%q<rspec-its>.freeze, [">= 0"])
      s.add_dependency(%q<rubocop>.freeze, [">= 0"])
      s.add_dependency(%q<simplecov>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<middleman-core>.freeze, [">= 3.1"])
    s.add_dependency(%q<image_optim>.freeze, ["~> 0.20.2"])
    s.add_dependency(%q<image_optim_pack>.freeze, ["~> 0.2.1"])
    s.add_dependency(%q<appraisal>.freeze, [">= 0"])
    s.add_dependency(%q<aruba>.freeze, [">= 0"])
    s.add_dependency(%q<cucumber>.freeze, [">= 0"])
    s.add_dependency(%q<pry>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 3.0.0"])
    s.add_dependency(%q<rspec-its>.freeze, [">= 0"])
    s.add_dependency(%q<rubocop>.freeze, [">= 0"])
    s.add_dependency(%q<simplecov>.freeze, [">= 0"])
  end
end
