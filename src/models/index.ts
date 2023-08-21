export interface IProduct {
  id: number,
  name: string,
  checked: boolean,
}

export interface Props {
  products: IProduct[],
  setProducts: (val: IProduct[]) => void,
}