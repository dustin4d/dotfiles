#
# ~/.bashrc
#
export VISUAL=nvim
export EDITOR=nvim

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# ─────────────────────────────────────────────────────────────
# Starship - use if installed
# ─────────────────────────────────────────────────────────────
if command -v starship >/dev/null 2>&1; then
    eval "$(starship init bash)"
fi

# -------------------------------------------------------------
# Aliases and command maps
# -------------------------------------------------------------
alias ls='ls -hal --color=auto'
alias grep='grep --color=auto'
alias nv='nvim'

# Use lsd if available; fall back to ls
if command -v lsd >/dev/null 2>&1; then
  alias ls='lsd -1'
  alias ll='lsd -l'
  alias la='lsd -la'
  alias lt='lsd --tree'
fi

# Change GOPATH
export GOPATH="$HOME/code/go"

# Add go packages to $PATH
export PATH="$PATH:$HOME/code/go/bin"

source <(kubectl completion bash)
