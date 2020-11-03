import { Rule, SchematicContext, Tree /*, externalSchematic*/ } from '@angular-devkit/schematics';

export function myExternal(_options: any): Rule {

  //const headerText = `@copyright ngViking, by the comunity, for the comunity`;

  return (tree: Tree, _context: SchematicContext) => {
    return tree;
    /*tree.getDir(_options.sourceDir).visit(filePath => {
      if (filePath.endsWith('.ts')) { _context.logger.info('Hay un archivo .ts'); }
      externalSchematic('@schematics/angular', 'component', _options);
      const content = tree.read(filePath);
      if (!content) { return; }
      if (content.indexOf(headerText) == -1) {
        tree.overwrite(filePath, headerText + content);
      }
    });*/
    
  };
}



