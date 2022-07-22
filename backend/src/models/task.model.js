require('mongoose-type-email');

module.exports = function (app) {
  const modelName = 'task';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    username: {
      type: String,
      required: true,
      minlength: 2,
    },
    email : {
      type: mongooseClient.SchemaTypes.Email,
      required: [true, 'Email is required']
    },
    address : {
      street: {
        type: String,
        required: [false, 'Street is required']
      },
      city: {
        type: String,
        required: [false, 'City is required']
      },
      suite: {
        type: String,
        required: [false, 'State is required']
      },
      zipcode: {
        type: String,
        required: [false, 'Zipcode is required']
      },
      geo: {
        lat: {
          type: String,
          required: [false, 'Latitude is required']
        },
        lng: {
          type: String,
          required: [false, 'Longitude is required']
        }  
    },
    phone : {
      type: String,
      required: [false, 'Phone is required']
    },
    website : {
      type: String,
      required: [false, 'Website is required']
    },
    company : {
      name: {
        type: String,
        required: [false, 'Company Name is required']
      },
      catchPhrase: {
        type: String,
        required: [false, 'Catch Phrase is required']
      },
      bs: {
        type: String,
        required: [false, 'Business is required']
      }
    }  
 }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  return mongooseClient.model(modelName, schema);
};