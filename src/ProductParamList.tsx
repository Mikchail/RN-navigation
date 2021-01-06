export type ProductParamList = {
  EditProduct: {
    name: string;
    submit?: React.MutableRefObject<() => void>;
  };
  Product: {
    name: string;
  };
};
