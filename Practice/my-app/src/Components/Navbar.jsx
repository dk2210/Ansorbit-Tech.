import React from "react";
import Login from "./Login";

const Navbar = () => {
  const [loginValue, setLoginValue] = React.useState(true);
  const [loggedinValue, setLoggedinValue] = React.useState(false);
  const [loginPageValue, setLoginPageValue] = React.useState(false);
  const [loggedUser, setLoggedUSer] = React.useState();

  const handleLogin = () => [setLoginPageValue(true)];

  const handleDlt = () => {
    setLoginPageValue(false);
  };

  const handleLogout = () => {
    setLoginValue(true);
    setLoggedinValue(false)
    setLoginPageValue(false)
    alert("Logged out !")
  }

  React.useEffect(() => {
    setLoggedUSer(JSON.parse(localStorage.getItem("loggedinUSer")));
    if (loggedUser!= null ) {
      setLoginValue(false);
      console.log("Hello")
      setLoggedinValue(true)
    }
  }, [loginPageValue,loggedinValue]);
  console.log("Hey I am : ", loggedUser);
  return (
    <div
      style={{
        display: "flex",
        border:'1px solid #b0c4de',
        width: "98%",
        height: "110px",
        background: "white",
        alignItems: "center",
        justifyContent: "space-between",
        padding:'10px',
        margin:'10px auto auto',
        borderRadius:'5px'
      }}
    >
      <div style={{width: "20%" }}>
        <div style={{ width: "60%", height: "95px" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src='https://media.istockphoto.com/id/891605714/vector/breaking-news-vector-illustration-poster-banner-logo-badge-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=EllCcjjvtMCJCbflIo1zMSCvWtBXSFOSfgdjJ7lIjuM='
            alt=''
          />
        </div>
      </div>
      <div
        style={{
          width: "18%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {loginValue && (
          <div>
            <h3 onClick={handleLogin} style={{ cursor: "pointer" }}>
              Login
            </h3>
          </div>
        )}
        {
            loggedinValue && <div>
            <h3 onClick={handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </h3>
          </div>
        }

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "60px", height: "60px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhgVFRIZGBgYEhgZGBkYFRgaGBgYGBgZGRkYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBISHDQhGB4xMTExMTExMTQxNDExNDQ0NDQxPzQxNDU1NDE/MTQxPzQ0NDExMTQ0PzExMTExMTQ0Mf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQUGBwIDBAj/xABIEAACAQICBgYHBQMJCQEAAAABAgADEQQhBQYSMUFRByJhcYGREzJCUqGxwSNicoLwFJKiJDNDU7LC0dLhFhc0RGNkc5PxFf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAQEBAAICAwEAAAAAAAAAAAERAhIhAzETQWFR/9oADAMBAAIRAxEAPwC5oQhAIQhAIQhAIRLzmxuOpUUL1HVFG9mIA7u09kDqiSutNdJVNerhqW3997qneqjNvG0g+ldZsZicqldtk+wh2E7tld/jeWTRc+kNYsHQyqYhFPu7QLfui5kexfSVgkNkWpU/CgUebkSn1UDl4C0zCS+Kasmr0p+5g/Fq9vgqH5zR/vOrndhaf/sc/wB2V8VtM1EWRZ/Vgr0mVuOFpnuqOP7pnTS6T19vCMO1Kob4FRK4ZpqZrxJp1ZPpceE6QMC/rGon40y81uJIMDpbD1v5qsj9isL+W+UAjZTMHjxvv4+Bi8mx6LvFlJaL1uxtCwWqXUezUu48ydr4ybaG6QcPU6tdTRbnfaQ/msCviPGZwTeE1UqqsoZWDAi4IIII5gibLwFhCEAhCEAhCEAhCEAhCEAiEznxmKp0kZ6jhUUXZicgJUetmutTE7VOldKO48HqDm/ur93z5BBKtZdf6dImnhwKtTcXv9mh8PXPYMu2VlpLSFbEPt1qhduF9yjko3KO6cpEWaxYw2YbMztFEIx2M5kIqzMLFqsLTIiKozitINTAxAs2xNmb1z6msNmKBM9mKEjWbKxGUzDRAsyVYsjUtOWhtO4jCtek9lJuyNmjdpXge0WMs/VvW+hibI32dX3GNw34G9ru3yoSlprYTDo9EgxZWmqWu7C1LFNcblqk5jsqcx97z5yyEYEAg3BG/nIjOEIQCEIQCEIQCcuNxdOlTapUYKiC7MeA/VspvdgASTYAb+UpfXnWY4yp6Om32CHq2/pG989nLzgaNa9Z3xlS2aUkPUS+/htvzbs4bu2R8GaiDM1mlbCJiTMhC0Rm0qiKViLM4GNooMyEW0sT2xtFisIBZUtJNiiYATaJKSltEMS0AIxb0yURcpoxmKSkhZju3AbyeQjF/tMf6ofvn/LJcVKGWaikjzazn+pH75/yzu0fpum4s1kbkT1fBvpEW05bMmOp2tRw5FGsb0jkrHfTP1T5SIibAsWJLq+1YEXBvflM5XWousWyRhqrdU5UmPA+4ew8PLlLEBmVLCEIBEMWNunNJJhsO9Zswi3A95tyr4m0CGdJWsRVf2Smes4vVI9lD6qd7Zk9g7ZWU2YzEvUqM7ttO7FmPMnf4cprBmpDSgRRARbRjOgwImWzOTHY5KYzOfZmf/st9Eb6lZV3maRj6fvCRXFYtnJvkL7v1vnPM6qZvj6ai5NhEpaXotub6SHbR8ohMaqwEYNmDMwkgmExtSmboxHMcD4R5w+sh3Mg7w1vgRLqYkno4BI10tPUzvVh2nd8JvOmKPvg91/lGni7SJkcvAfCNNXTSDcB33/xjPjtNM4Kgb8uQ8uMeSXlw6QxzVXLNuz2RyHLvmlaRLBVzJt3XMSpSKgE+XGbcC6h+tuKsN17XFgZlXNeG1MYsCU6uaWvak5z3ITx+6fpJIrSswZNtAaVFVdlzZ1H7w94TUS79w8HOWvqdpz9oo7Ln7RAA/3h7L+PHt75VC5Ry0LpNsPXSqMwDZwPaQ+sO/j4RYSroEWaqNVWUMpuCAQeYIuDNsy0SVZ0p6XLVUwynqoNt+129QeC3P5uyWdiKyorOxsqqWY8goufhPPuPxjV6r1W9Z3LnsvuXwFh4SyM2uWAEyIgFmvSXSRRMgsxfK8ej21YivsKSTkATIjiK5drn9czHHTeLDWQcCSfoIzEyWrIIXiQmVLeBiQgLeAMSEDarkbifAzM1L7z+vGaQY64ClTc2K58e0cxIsN6oDHTRejmdshYDexFz+Uc484bRdMZkeFvpHjD0VUZADwEK5aGi6dtnYBBHHO/f2xp0pqyR1qJvzQn+yfoZJ6TZzcF+UpkVbiKDoxV1KkcDNMtZMEhUq4D7TFjtAWz5eAEatK6sUPRu1KkS4W6hXIHkb37pNXx/wAV/NtGqykMrEMMwRvHD6mamESVg96v4pzik2mY7RIzYm9weZk8CSraFUo6su9WBHeDLUwFdKtNaibmF+7mPA3jyw8dWJqFpHaomi3rUvV7Ua9vIgjxEl0qzVrFeixSNwY7Ddz5fPZ8paUkutWYinSLjvR4B1BzqMtMfmuW/hUympYnS1ibvh6XJalQ990Rf78r203GOiCLnFAigCVCBpy4pyQQDYWnRXcKL/q/bGzGYpVpmxubeV98lXUbrtdjNUUmAmVJCLCFJFtCJALQixIBN9ByDlv4HlNEVTAmGi8btDMm/G3Dt7jHzDk5yI6JJZsuIy777vGS/BgHMbiLi8uxcrcgNzOlViKl7TciyaZSBZsQRLGbFWZrUQvXjRajZrqLFm2Xy3k+q3wt5SGGXBpHACtSemfaUgHkeB85UdWmVYqwsVYgjkQbESxOp7a5I9VNODDuUe/o2Iv91vety59wkciiXGZcXI5BF1O+1jw7DeWxonE+koU34sik99rH43lB6laQ9JSNInrU/V7UO7xBy8pc+pdfaw2yfYdl8DZh85merjfXuagHSdWLY/Z9yig89pvrIleSLX+oDpKqL7gg/gWR4CdI5UBpmLTG8QuBKmOTSFewsPPlzkZxmLLdUerfz7Y7adfqix37yIwVBaZtWRhEhCRoQEIQFtEmdpiRASEWF4CQhCA96uP9pbI2BOfxk20fVUqexjIHod9h1Yj2pNcCQR1TvJt58Zm468y4d6TgDfN4dZwohnQqTPpra61tMgs5wIjVABmbDneTC3+OwLK6150WUqisB1amRyyDgDf3j5GThNIUwQC4z3TZjKNPEUnpsQVYWJB3EbiO0S87KnWWKXigzoxuGalUZGttIxBI3HkROadHF36Ix7UKq1F4esPeU+sJ6F6PcWH9KAbgim47Q22L/wAInmy8uDoJx7vVr0mzVKC7PMDbOXdnJnvVl9YaOkt7aUrZe4f4B/hIwuKYcTJb0sUdnSj/AH6FNh4bSn5CQozcYv27P21ucQ4k8zOPamQeKrXpSqSI1VI4VBd7ncJw1yNo23XmaNMIQhSwhCAXgTEiwCJeEIBCEIHbgMRssAfV2gfKT3Ry02pgqLG30lc24j9dsetDV6mz1WNgd1/kJjqOnHVnpYlMDZBPETopKLRk0Vi3cAMDn7XDxM6cdi2RT1ezM28Zy9bmu/vNw5so4ECMGkMWGUgAmx48fKYYPSLE2frZ3uMpsxNam9gG2Sd1xkO+01PVY+4b2HVs2VxkF+o4TmfFVFDJtmx3iPj4a3UK7RsMwb58LRofCqwYg2dfZJGdpvmysdSoxpnNw3EjPwyjdHLS6naDdlvGNpnRyJLY6A1/lWJP/bqPN/8ASVPLj6AKJ2sW/JaKjxNQn5DzkRj07UdjEYWta4elUQ96MrD+38JAKeEdlB2TmBulz9NGjfS6N9IBc0Kqv+U9RvCzA+EopdMYgKV9I1rWztcDsjb+lmft3Ng6g9k+ImBokbxOfRum6lI2N2Q7wSSe9SdxknRlrKGU3U8h8D2x5Vcn6RWrYFs/ZEbWMk2ksCFNwCQVsew3y+Zker0SrFTw+PbG6y0gRJ0tTKr3jhOaFEIQgEIQgEIQgLCKFj9oDQi1QXdiFGVrWuewzPXU5m1vni9XIbcBo6pWNkHiTYecsXVzRNLDUwtYqXc7TC/LIAc7X+JmGjtE06Qstrb+3xjzUxVDbVHA2mUkX5La/wA5y6+SdTHWfF1xdd9B6NrADznHprHYSmqmqosWsAd+WZtl+s4mHr4e3UK+ts5Nx5Rg1zZfQhkCt1wbkhrADl+uMxOOdbvydye56cGJ0su2WpU12bmxK7x3RtfSim5YC+ZFha3fGL9rqEX2z1T8zfdNDMSc+d/OeicyPPe7Uk//AEmcZPl+rTk/bze3D6xswxINr2Ewet/r223Tck/TF6ro0k+1a3D9WjbOmrVvnz3iaSIRhPQPQbgtjRz1D/S4hiD91FVAPMN5zz/aeq9SNHfs+jsNSO8UVLficbR+JkU46YwC4jD1KDbqlNkPZtCwPgbHwnkvFYd6bvTYWZHZWHJkJUjzBnsKefumjQXoMcMQo6mJW55Colg48QVPnArcid2jNJVKD7SnI+sp3MBz7e2cdohECx8FiaOJp3U2ysyn1lP64zi0tq56SxRgGGXf+vrIVhsQ1NgymxH6seyT9MWGolwwH2ZbeLjqk7uExbhOd+qjdbVnEKp9VgM8t/hNJ1ar7O17Nr3sb91pNKSVgFO2CNhdoG172vfavl5Ts9DXPu/vXmL8sjp+PpUrrYkcjMJ36YYGvUIIP2jZjdv3icE7OYhCEAirEmSwJ1gEw6Uw7U96ryOeyL90700jT3JTDb7Z2uoudoeUgVXEVGRSzdX1R+UDh3ETOnjGUsQ3rWByztv8NwnG/FL9u/Py3n6TVNNoaW2KY2lIDAtbgfqJHdKaa22VgpBUNZto3sTuytbK0aVe6t1r2II4Xuc/nNDOL5S8/DzzdOvn66mHbQOMRS3pLlCRcA2JGd9ntmvG4tS5FiyFtrMgNnfebHONLNEDTfjN1j8l8cbaqbJtcHkR5xDuEwLTG8251ntTAxISIyUwmMyvAftStD/tePo0LXUuGf8A8a9Zx4gW8Z6rlP8AQXoIqlXGsPXPo6WXsqb1GHedlfymXBClkZ181dGOwT0QBtjr0ibZOoNvMEr+aSaIYHjiojKSCCCDYg5EEZEEHcZheWr0zapGlV/baS9SqQKoA9WpuDHsb5jtlVWgF48l7U7bIB2AL25jfGe0V3J3m8CS0tZmpEbKI1uDLluyzjdpHWDE1gwZ7K3rKg2VPeBvjTCTxhtF4kISghCLaAkzWYTNYCXhtQYTGAoMUmYwgEIQhBCEIBCEIBHHQmi6mKxFPD0xd6jhRyA4sewC58I3iXx0N6pGhSOMqr9pWUCmCM0pHPa72y8AOcCxND6PTD0KdCmLJTQKO2wzJ7Sc/Gd8QRYUQhCByaQwVOvSalUUMjqVZTuIInmTXbVepo/Emk5LI12pOR6634/eGQI7QeM9TRj1o1eoY7DtQqjtVwOsjWyZf8OMDyiWmMetZtX6+BrmjWGe9GHquvBlP04RlhBCEIBCEIUAxYkIGUBEvC8AJiQhADCEIBCEIQQhCAQhJbqJqZV0jVsCUooR6Spbdx2EvkXI8t54XKdOi/Ug42t6asv8npsL33VX37A5ge15T0QqgCwnNo7AU6FJaVJQqIuyqjgB8z2zsgEIQgEIQgEIQgMWs+reHx9A0q68yji23Tb3lPlcbjaeddbtUMTo+rs1RtI3qVVB2H7Put90/Gep5yaQwNKvTanVRXRhZlYXB/1geP7RJauuXRNWolquCvVp5k0j/OJ2KfbHke+Vc6EEgixBsQciCOBHAwjXCEIBCEIUQhCAQhCAQhCAQhFtCEhadOCwdSrUWnSRndjZVUEsfAS49SuiUKRWx9mO9aAzUH/qMPW/CMu0wqG6h9H1fHsHe9PDg5vbrPbetO+/8W4ds9CaM0dSw9JaNFAiKLKo+JPM9s6qVMKAFAAAAAAsABuAHATZAIQhAIQhAIQhAIQhAIQhAQiRnWfUnBY4E1aezUtlVSyuO82s3iDJPCB551h6JcdQu1AjEJ90bNS34Cc/AyAYjDvTYo6MjDerqVI7wcxPYsb9J6Iw2IXZr0EqD76g+R3iB5EMSehdLdEWjqtzTNSgfuNtLf8AC98u4iRPG9CeJX+axdN/x02pn4Fh8YFTQk/r9EulV3U6b/hqj6gThfoy0uP+UJ7np/5oEOhJmnRlpcn/AIW3e6fQxww3RFpRvWFJR96pf4AQK8igS38F0JVDY1saqjiKdIsT+ZmAHlJfonoq0ZRsWptXPOq1x+6oAgefdHaNrYhwlCk9Rz7KKWI7TbcO0yydXehzEVLNi6oorxRLPUI5X9Vf4pduDwdKkmxTpqij2UUKPITpgM2gdW8Jgk2cPRCX9Zt7t+JzmY8ARYQCEIQCEIQCEIQP/9k='
              alt='profile-cover'
            />
          </div>
          {
            loginValue && <p style={{ margin: "0px" }}>Angela Ronder</p>
          }
          {
             loggedinValue &&  <p>{loggedUser[0].name}</p>
          }
          
        </div>
      </div>
      {loginPageValue && <Login handleDlt={handleDlt} />}
    </div>
  );
};

export default Navbar;
