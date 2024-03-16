type TransformProperties<T> = {
  [P in keyof T]: (value: T[P]) => any
}

type TransformedObject<T, Transformer extends TransformProperties<T>> = {
  [P in keyof T]: ReturnType<Transformer[P]>
}

function transformObjectProperties<
  T,
  Transformer extends TransformProperties<T>
>(obj: T, transformer: Transformer): TransformedObject<T, Transformer> {
  const result: Partial<TransformedObject<T, Transformer>> = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      const transform = transformer[key]
      result[key] = transform(element)
    }
  }

  return result as TransformedObject<T, Transformer>
}

// Usage Example
const originalObject = {
  id: 1,
  name: 'TypeScript',
  isActive: true
}

const transformedObject = transformObjectProperties(originalObject, {
  id: (value: number) => value.toString(),
  name: (value: string) => value.toUpperCase(),
  isActive: (value: boolean) => !value
})

console.log(transformedObject)
// Output: { id: '1', name: 'TYPESCRIPT', isActive: false }
