module.exports = function defaultTemplate(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const code = `IMPORTS
  const COMPONENTNAME = (PROPS) => JSX

  // tslint:disable:no-default-export
  EXPORTS
  `;
  const tpl = template.smart(code, {
    preserveComments: true,
  });

  return tpl({
    IMPORTS: imports,
    COMPONENTNAME: componentName,
    PROPS: props,
    JSX: jsx,
    EXPORTS: exports,
  });
};
