const isAdm = (req, res) => {
    const roleHeader = req.get('role');
    if(roleHeader == "user") {
        return false;
    } else if (roleHeader == "adm") {
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
    isAdm,
    isLoggedIn,
}