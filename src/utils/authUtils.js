const isAdmin = (req, res) => {
    const roleHeader = req.get('role');
    if(roleHeader == "user") {
        return false;
    } else if (roleHeader == "admin") {
        return true;
    }else {
        return false;
    }
}

const isLoggedIn = (req, res) => {
    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1];
    return token;
}

module.exports = {
    isAdmin,
    isLoggedIn
}