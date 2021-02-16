#!/bin/bash
cd /home/ec2-user/server
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -

#installation of npm is broken right now, fix for later
sudo yum -y install nodejs npm --skip-broken


