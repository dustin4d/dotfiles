""" ~/.vimrc by Dustin H.
""" https://github.com/dustin4d

" No nonsense, lightweight vim. Covers basic text editing,
" some autocompletion and highlighting. All other IDE functions
" are reserved for DOOM Emacs. 

"""" vim-plug
call plug#begin()
    " Vim's Wiki, but it's a plugin.
    Plug 'vimwiki/vimwiki'
    " JavaScript syntax highlighting
    Plug 'pangloss/vim-javascript'
    " Terminus - Enhanced terminal functions for Vim
    Plug 'wincent/terminus'
call plug#end()

""" Basic configs
" Use system clipboard
set clipboard=unnamedplus
set nocompatible
filetype plugin on
syntax on
set number
" Tab spacing after declaring a code block - (, {, [, etc.
set tabstop=4
set expandtab
set shiftwidth=4
""" Line highlighting & theme setting
color slate
set cursorline
hi CursorLine guibg=Grey40
