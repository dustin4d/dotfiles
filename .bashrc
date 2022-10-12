# .bashrc

# ALIASES #
alias ls='ls --color=auto'
alias vps='sudo xbps-install'
alias fonts='fc-list : family | less'

# If not running interactively, don't do anything
[[ $- != *i* ]] && return


# PROMPT
PS1='[\u@\h \W]\$ '
