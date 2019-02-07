export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "bit-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jbe612cccb.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ICegitJeJ",
    APP_CLIENT_ID: "1hu709ct4p0b31476657diid6s",
    IDENTITY_POOL_ID: "us-east-1:9c990d72-bfde-46ec-93e3-627cc465faac"
  }
};
