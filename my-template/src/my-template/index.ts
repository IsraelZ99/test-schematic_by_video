import { apply, Rule, SchematicContext, Tree, template, url, mergeWith, move } from '@angular-devkit/schematics';
import { strings } from "@angular-devkit/core";
import { Schema  } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myTemplate(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      }), move("src/app/my-template")
    ]);
    
    return mergeWith(sourceParametrizedTemplates)(tree,_context);
  }

}
