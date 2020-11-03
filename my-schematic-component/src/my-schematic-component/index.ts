import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function mySchematicComponent(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create("maxim.ts","is a viking");
    tree.create("sherry.ts","is a viking");
    tree.create("ana.ts","is a viking");
    tree.create("chris.ts","is a viking");
    return tree;
  };
}
