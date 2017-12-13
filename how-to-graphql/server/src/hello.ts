import { FunctionEvent } from 'graphcool-lib';

interface Data {
  name: string;
}

export default async (event: FunctionEvent<Data>) => {
  await new Promise(r => setTimeout(r, 50));
  return {
    data: {
      message: `Hello ${event.data.name || 'World'}`
    }
  };
};
