#
# ~/.bashrc
#
export VISUAL=nvim
export EDITOR=nvim

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Load external bash theme, includes PS1
if [ -f ~/.config/bash/visiblue.sh ]; then
  source ~/.config/bash/visiblue.sh
fi

# aliases
alias ls='ls --color=auto'
alias grep='grep --color=auto'

# Change GOPATH
export GOPATH="$HOME/code/go"

# Add go packages to $PATH
export PATH="$PATH:$HOME/code/go/bin"

# Use lsd if available; fall back to ls
if command -v lsd >/dev/null 2>&1; then
  alias ls='lsd -1'
  alias ll='lsd -l'
  alias la='lsd -la'
  alias lt='lsd --tree'
fi

# Generated for envman. Do not edit.
[ -s "$HOME/.config/envman/load.sh" ] && source "$HOME/.config/envman/load.sh"
