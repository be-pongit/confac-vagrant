Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision :shell, :path => "vagrant-provision.sh"

  config.vm.network "forwarded_port", guest: 27017, host: 27018
end
