{"modelTopology":{"class_name":"Sequential","config":{"name":"sequential_1","layers":[{"class_name":"Conv2D","config":{"filters":32,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"normal","seed":null}},"kernel_regularizer":null,"kernel_constraint":null,"kernel_size":[3,3],"strides":[1,1],"padding":"valid","data_format":"channels_last","dilation_rate":[1,1],"activation":"relu","use_bias":true,"bias_initializer":{"class_name":"Zeros","config":{}},"bias_regularizer":null,"activity_regularizer":null,"bias_constraint":null,"name":"conv2d_Conv2D1","trainable":true,"batch_input_shape":[null,64,64,4],"dtype":"float32"}},{"class_name":"BatchNormalization","config":{"axis":-1,"momentum":0.99,"epsilon":0.001,"center":true,"scale":true,"beta_initializer":{"class_name":"Zeros","config":{}},"gamma_initializer":{"class_name":"Ones","config":{}},"moving_mean_initializer":{"class_name":"Zeros","config":{}},"moving_variance_initializer":{"class_name":"Ones","config":{}},"beta_regularizer":null,"gamma_regularizer":null,"beta_constraint":null,"gamma_constraint":null,"name":"batch_normalization_BatchNormalization1","trainable":true}},{"class_name":"Conv2D","config":{"filters":32,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"normal","seed":null}},"kernel_regularizer":null,"kernel_constraint":null,"kernel_size":[3,3],"strides":[1,1],"padding":"valid","data_format":"channels_last","dilation_rate":[1,1],"activation":"relu","use_bias":true,"bias_initializer":{"class_name":"Zeros","config":{}},"bias_regularizer":null,"activity_regularizer":null,"bias_constraint":null,"name":"conv2d_Conv2D2","trainable":true}},{"class_name":"BatchNormalization","config":{"axis":-1,"momentum":0.99,"epsilon":0.001,"center":true,"scale":true,"beta_initializer":{"class_name":"Zeros","config":{}},"gamma_initializer":{"class_name":"Ones","config":{}},"moving_mean_initializer":{"class_name":"Zeros","config":{}},"moving_variance_initializer":{"class_name":"Ones","config":{}},"beta_regularizer":null,"gamma_regularizer":null,"beta_constraint":null,"gamma_constraint":null,"name":"batch_normalization_BatchNormalization2","trainable":true}},{"class_name":"MaxPooling2D","config":{"pool_size":[2,2],"padding":"valid","strides":[2,2],"data_format":"channels_last","name":"max_pooling2d_MaxPooling2D1","trainable":true}},{"class_name":"Dropout","config":{"rate":0.25,"noise_shape":null,"seed":null,"name":"dropout_Dropout1","trainable":true}},{"class_name":"Conv2D","config":{"filters":64,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"normal","seed":null}},"kernel_regularizer":null,"kernel_constraint":null,"kernel_size":[3,3],"strides":[1,1],"padding":"valid","data_format":"channels_last","dilation_rate":[1,1],"activation":"relu","use_bias":true,"bias_initializer":{"class_name":"Zeros","config":{}},"bias_regularizer":null,"activity_regularizer":null,"bias_constraint":null,"name":"conv2d_Conv2D3","trainable":true}},{"class_name":"BatchNormalization","config":{"axis":-1,"momentum":0.99,"epsilon":0.001,"center":true,"scale":true,"beta_initializer":{"class_name":"Zeros","config":{}},"gamma_initializer":{"class_name":"Ones","config":{}},"moving_mean_initializer":{"class_name":"Zeros","config":{}},"moving_variance_initializer":{"class_name":"Ones","config":{}},"beta_regularizer":null,"gamma_regularizer":null,"beta_constraint":null,"gamma_constraint":null,"name":"batch_normalization_BatchNormalization3","trainable":true}},{"class_name":"Conv2D","config":{"filters":64,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"normal","seed":null}},"kernel_regularizer":null,"kernel_constraint":null,"kernel_size":[3,3],"strides":[1,1],"padding":"valid","data_format":"channels_last","dilation_rate":[1,1],"activation":"relu","use_bias":true,"bias_initializer":{"class_name":"Zeros","config":{}},"bias_regularizer":null,"activity_regularizer":null,"bias_constraint":null,"name":"conv2d_Conv2D4","trainable":true}},{"class_name":"BatchNormalization","config":{"axis":-1,"momentum":0.99,"epsilon":0.001,"center":true,"scale":true,"beta_initializer":{"class_name":"Zeros","config":{}},"gamma_initializer":{"class_name":"Ones","config":{}},"moving_mean_initializer":{"class_name":"Zeros","config":{}},"moving_variance_initializer":{"class_name":"Ones","config":{}},"beta_regularizer":null,"gamma_regularizer":null,"beta_constraint":null,"gamma_constraint":null,"name":"batch_normalization_BatchNormalization4","trainable":true}},{"class_name":"MaxPooling2D","config":{"pool_size":[2,2],"padding":"valid","strides":[2,2],"data_format":"channels_last","name":"max_pooling2d_MaxPooling2D2","trainable":true}},{"class_name":"Dropout","config":{"rate":0.25,"noise_shape":null,"seed":null,"name":"dropout_Dropout2","trainable":true}},{"class_name":"Flatten","config":{"name":"flatten_Flatten1","trainable":true}},{"class_name":"Dense","config":{"units":126,"activation":"relu","use_bias":true,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"normal","seed":null}},"bias_initializer":{"class_name":"Zeros","config":{}},"kernel_regularizer":null,"bias_regularizer":null,"activity_regularizer":null,"kernel_constraint":null,"bias_constraint":null,"name":"dense_Dense1","trainable":true}},{"class_name":"BatchNormalization","config":{"axis":-1,"momentum":0.99,"epsilon":0.001,"center":true,"scale":true,"beta_initializer":{"class_name":"Zeros","config":{}},"gamma_initializer":{"class_name":"Ones","config":{}},"moving_mean_initializer":{"class_name":"Zeros","config":{}},"moving_variance_initializer":{"class_name":"Ones","config":{}},"beta_regularizer":null,"gamma_regularizer":null,"beta_constraint":null,"gamma_constraint":null,"name":"batch_normalization_BatchNormalization5","trainable":true}},{"class_name":"Dense","config":{"units":84,"activation":"relu","use_bias":true,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"normal","seed":null}},"bias_initializer":{"class_name":"Zeros","config":{}},"kernel_regularizer":null,"bias_regularizer":null,"activity_regularizer":null,"kernel_constraint":null,"bias_constraint":null,"name":"dense_Dense2","trainable":true}},{"class_name":"Dropout","config":{"rate":0.5,"noise_shape":null,"seed":null,"name":"dropout_Dropout3","trainable":true}},{"class_name":"Dense","config":{"units":8,"activation":"linear","use_bias":true,"kernel_initializer":{"class_name":"VarianceScaling","config":{"scale":1,"mode":"fan_avg","distribution":"normal","seed":null}},"bias_initializer":{"class_name":"Zeros","config":{}},"kernel_regularizer":null,"bias_regularizer":null,"activity_regularizer":null,"kernel_constraint":null,"bias_constraint":null,"name":"dense_Dense3","trainable":true}}]},"keras_version":"tfjs-layers 4.2.0","backend":"tensor_flow.js"},"weightsManifest":[{"paths":["weights.bin"],"weights":[{"name":"conv2d_Conv2D1/kernel","shape":[3,3,4,32],"dtype":"float32"},{"name":"conv2d_Conv2D1/bias","shape":[32],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization1/gamma","shape":[32],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization1/beta","shape":[32],"dtype":"float32"},{"name":"conv2d_Conv2D2/kernel","shape":[3,3,32,32],"dtype":"float32"},{"name":"conv2d_Conv2D2/bias","shape":[32],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization2/gamma","shape":[32],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization2/beta","shape":[32],"dtype":"float32"},{"name":"conv2d_Conv2D3/kernel","shape":[3,3,32,64],"dtype":"float32"},{"name":"conv2d_Conv2D3/bias","shape":[64],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization3/gamma","shape":[64],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization3/beta","shape":[64],"dtype":"float32"},{"name":"conv2d_Conv2D4/kernel","shape":[3,3,64,64],"dtype":"float32"},{"name":"conv2d_Conv2D4/bias","shape":[64],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization4/gamma","shape":[64],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization4/beta","shape":[64],"dtype":"float32"},{"name":"dense_Dense1/kernel","shape":[10816,126],"dtype":"float32"},{"name":"dense_Dense1/bias","shape":[126],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization5/gamma","shape":[126],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization5/beta","shape":[126],"dtype":"float32"},{"name":"dense_Dense2/kernel","shape":[126,84],"dtype":"float32"},{"name":"dense_Dense2/bias","shape":[84],"dtype":"float32"},{"name":"dense_Dense3/kernel","shape":[84,8],"dtype":"float32"},{"name":"dense_Dense3/bias","shape":[8],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization1/moving_mean","shape":[32],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization1/moving_variance","shape":[32],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization2/moving_mean","shape":[32],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization2/moving_variance","shape":[32],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization3/moving_mean","shape":[64],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization3/moving_variance","shape":[64],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization4/moving_mean","shape":[64],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization4/moving_variance","shape":[64],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization5/moving_mean","shape":[126],"dtype":"float32"},{"name":"batch_normalization_BatchNormalization5/moving_variance","shape":[126],"dtype":"float32"}]}],"format":"layers-model","generatedBy":"TensorFlow.js tfjs-layers v4.2.0","convertedBy":null}
