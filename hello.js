!DOCTYPE html>
<html>
    <title>Input User</title>
</html>

<h1>XI RPL 2/21</h1>
    <h2>Pendaftaran hiGirls!</h2>
    Namaa : 
    <input type="text" id="nama"> <br>
    E-Mail :
    <input type="text" id="inputemail"> <br>
    Negara : 
    <select id="Negara">
        <option value="Indonesia">Indonesia</option>
        <option value="England">England</option>
        <option value="Singapura">Singapura</option>
        <option value="Swiss">Swiss</option>
        <option value="Jerman">Jerman</option>
        <option value="Singapura">Singapura</option>
        <option value="Amerika">Amerika</option>
        <option value="Thailand">Thailand</option>
    </select> <br>
    Tahun Lahir :
    <select id="lahir">
        <option>2000</option>
        <option>2001</option>
        <option>2002</option>
        <option>2003</option>
        <option>2004</option>
        <option>2005</option>
        <option>2006</option>
    </select> <br>
    Gender :
    <input type="radio" name="gender" value="Pria"> Pria
    <input type="radio" name="gender" value="Wanita"> Wanita
    <input type="radio" name="gender" value="Gender Tidak Terdefinisi"> Tidak Terdefinisi <br>
    <button id="btn" onclick="ambilData()">Daftar</button> <br>

    <table>
        <b style='display:none' id="welcome">Selamat Datang di hiGirls!</b>
        <tr>
            <tr>
            <td><b>Namaa :</b></td>
            <td><b id="demo"></b></td>
        </tr>
        <tr>
            <td><b>E-Mail :</b></td>
            <td><b id="displayemail"></b></td>
        </tr>
        <tr>
            <td><b>Negara :</b></td>
            <td><b id="displaynegara"></b></td>
        </tr>
        <tr>
            <td><b>Tahun Lahir :</b></td>
            <td><b id="displaylahir"></b></td>
        </tr>
        <tr>
            <td><b>Gender :</b></td>
            <td><b id="displayGender"></b></td>
        </tr>
        </tr>
    </table>
        
        <script src="hello.js"></script>