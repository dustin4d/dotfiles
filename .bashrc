# .bashrc

# ALIASES #
alias ls='ls --color=auto'
alias vps='xbps-install'

# If not running interactively, don't do anything
[[ $- != *i* ]] && return


# PROMPT
PS1='[\u@\h \W]\$ '
