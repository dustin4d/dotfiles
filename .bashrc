# ~/.bashrc, by Dustin H. 
# https://github.com/dustin4d

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

### PATH - add DOOM Emacs
export PATH="$HOME/.emacs.d/bin:$PATH"

### Aliases
alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias pacman='yay'
alias font="fc-list : family | grep -i "

### Proompt
PS1='\[\e[0;38;5;69m\][\[\e[0;1;38;5;69m\]\u\[\e[0;38;5;69m\]@\[\e[0;38;5;69m\]\H\[\e[0;38;5;69m\]] \[\e[0;38;5;244m\]\w\n\[\e[0;1;38;5;244m\]\$ \[\e[0;38;5;244m\]> \[\e[0m\]'

### Disable case sensitivity
shopt -s nocaseglob
# Case insensivity for tab-completion
bind "set completion-ignore-case on"
