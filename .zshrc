# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

source /usr/share/cachyos-zsh-config/cachyos-config.zsh

# Use lsd if available; fall back to ls
if command -v lsd >/dev/null 2>&1; then
  alias ls='lsd -1'
  alias ll='lsd -l'
  alias la='lsd -la'
  alias lt='lsd --tree'
fi

# Use python as python3 
if command -v python3 >/dev/null 2>&1; then
  alias py='python3'
fi

# Golang stuff
export GOPATH="$HOME/code/go"
export PATH="$PATH:$HOME/code/go/bin"

# Generated for envman. Do not edit.
[ -s "$HOME/.config/envman/load.sh" ] && source "$HOME/.config/envman/load.sh"

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
