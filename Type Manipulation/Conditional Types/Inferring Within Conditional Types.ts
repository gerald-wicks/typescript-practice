type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;

type Num = GetReturnType<() => number>; // type Num = number

type Str = GetReturnType<(x: string) => string>; // type Str = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>; // type Boold = boolean[]