# hypress/project-skeleton
A very basic project skeleton for hypress projects. The main goal is to keep as much as 
dependencies away from the host machine.  

## Requirements
1. [VirtualBox](https://www.virtualbox.org/)
2. [Vagrant](https://www.vagrantup.com/)
3. [vagrant-hostmanager](https://github.com/devopsgroup-io/vagrant-hostmanager)

## Quick install requirements with homebrew
Run 

```bash
brew cask install virtualbox vagrant
```

## Getting started
1. Run: `vagrant up`
2. Goto: (http://hypress.local)
3. Develop in: `./src`


## Reset to clean state
Run

```bash
./reset.sh
```
