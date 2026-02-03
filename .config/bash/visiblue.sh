# Visiblue
#
# Primary
BG_COLOR="\[\e[48;2;0;102;153m\]"       # 0x000000
FG_COLOR="\[\e[38;2;102;102;153m\]" # 0x666699

# Normal colors
BLACK="\[\e[38;2;51;51;102m\]"   # 0x333366
RED="\[\e[38;2;102;102;204m\]"   # 0x6666cc
GREEN="\[\e[38;2;0;153;204m\]"   # 0x0099cc
YELLOW="\[\e[38;2;51;102;204m\]" # 0x3366cc
BLUE="\[\e[38;2;0;102;153m\]"    # 0x006699
MAGENTA="\[\e[38;2;0;102;255m\]" # 0x0066ff
CYAN="\[\e[38;2;102;153;153m\]"  # 0x669999
WHITE="\[\e[38;2;153;204;204m\]" # 0x99cccc

# Bright colors
BBLACK="\[\e[38;2;51;51;153m\]"    # 0x333399
BRED="\[\e[38;2;153;153;255m\]"    # 0x9999ff
BGREEN="\[\e[38;2;0;204;255m\]"    # 0x00ccff
BYELLOW="\[\e[38;2;102;153;255m\]" # 0x6699ff
BBLUE="\[\e[38;2;0;153;204m\]"     # 0x0099cc
BMAGENTA="\[\e[38;2;0;153;255m\]"  # 0x0099ff
BCYAN="\[\e[38;2;102;204;204m\]"   # 0x66cccc
BWHITE="\[\e[38;2;204;255;255m\]"  # 0xccffff

RESET="\[\e[0m\]"

PROMPT_COMMAND='
  PS1_CMD1=$(git branch --show-current 2>/dev/null)
  PS1="${BG_COLOR} \u@\H \w    ${RESET}\n\$ "
'
