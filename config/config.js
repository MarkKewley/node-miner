const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 9001;
} else {
    process.env.PORT = 9001;
}