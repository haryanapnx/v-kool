export interface HttpReq {
  resolve: () => void;
  reject: (error: any) => void;
}

export interface FakeParams {
  url: string;
  body: any;
  params: any;
}
