import ts from "typescript";

export const EXPORT_MODIFIER = ts.createModifier(ts.SyntaxKind.ExportKeyword);

export function makeValueLiteral(value: any): ts.Expression {
    if (Array.isArray(value)) {
        return arrayToArrayLiteral(value);
    }
    switch (typeof(value)) {
        case "string":
            return makeStringLiteral(value);
        case "number":
            return makeNumericLiteral(value);
        case "boolean":
            return makeBooleanLiteral(value);
        case "object":
            return objectToObjectLiteral(value);
        case "undefined":
            return makeIdentifier("undefined");    
        default:
            throw new Error(`Unrecognized type: ${typeof(value)}`);
    }
}

export function objectToObjectLiteral(object: any): ts.ObjectLiteralExpression {
    const properties = [];
    for (const prop of Object.keys(object)) {
        properties.push(makePropertyAssignment(prop, makeValueLiteral(object[prop])));
    }
    return makeObjectLiteral(properties);
}

export function arrayToArrayLiteral(array: any[]): ts.ArrayLiteralExpression {
    const values = array.map((v) => makeValueLiteral(v));
    return makeArrayLiteral(values);
}

export function makeObjectLiteral(properties): ts.ObjectLiteralExpression {
    return ts.createObjectLiteral(properties, true);
}

export function makeArrayLiteral(values: ts.Expression[]): ts.ArrayLiteralExpression {
    return ts.createArrayLiteral(values, true);
}

export function makePropertyAssignment(propName: string, initializer): ts.PropertyAssignment{
    return ts.createPropertyAssignment(
        makeIdentifier(propName),
        initializer
    );
}

export function makeIdentifier(text: string): ts.Identifier {
    return ts.createIdentifier(text);
}

export function makeStringLiteral(text: string): ts.StringLiteral {
    return ts.createStringLiteral(text);
}

export function makeNumericLiteral(number: number): ts.NumericLiteral {
    return ts.createNumericLiteral(String(number));
}

export function makeBooleanLiteral(bool: boolean): ts.BooleanLiteral {
    return bool ? ts.createTrue() : ts.createFalse();
}

export function makeVariableStatement(modifiers: ts.Modifier[], variableName: string, variableInitializer, flag = ts.NodeFlags.Const): ts.VariableStatement {
    return ts.createVariableStatement(
        modifiers,
        ts.createVariableDeclarationList(
            [ts.createVariableDeclaration(
                makeIdentifier(variableName),
                undefined,
                variableInitializer
            )], flag
        )
    );
}

export function makeEnum(modifiers: ts.Modifier[], enumName: string, values: string[]) {
    return ts.createEnumDeclaration(
        undefined,
        modifiers,
        makeIdentifier(enumName),
        values.map((v) => ts.createEnumMember(makeIdentifier(v), undefined))
    );
}

export function makeNew(expression: ts.Expression, args: ts.Expression[]): ts.NewExpression {
    return ts.createNew(
        expression,
        undefined,
        args
    );
}
