#!/bin/sh
git config pull.rebase true
git config status.submodule-summary true
git config diff.submodule log
git config push.recurse-submodules true
