var MinorMajor = function (nums) {
    this.minor = Math.min(...nums);
    this.major = Math.max(...nums);

    this.getMinor = () => {
        return this.minor;
    }

    this.getMajor = () => {
        return this.major;
    }
}