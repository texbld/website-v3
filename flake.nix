{
  description = "TeXbld website";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-22.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in {
        devShell = pkgs.mkShell { buildInputs = with pkgs; [ nodejs yarn ]; };
        formatter = nixpkgs.legacyPackages."${system}".nixfmt;
      });
}
