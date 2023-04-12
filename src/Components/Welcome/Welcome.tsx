import React, {useState, useEffect} from "react";
import "./Welcome.css"
import Header from "../Header/Header";
import { apiCalls } from "../apiCalls";
import { Link } from "react-router-dom";


const Welcome = () =>{
  const [allStrains, setAllStrains] = useState([])
  const [ fetching, setFetch] = useState(false)

  const fetchData = (): void => {
  apiCalls.getAllStrains()
	  .then(data => setAllStrains(data))
	  .catch(err => console.error(err));
  }

useEffect(() => {
  if(!fetching){
    fetchData()
    setFetch(true)
    }
}, [allStrains, fetching])
console.log("allStrains: ", allStrains)
  return (
    <section className="App">
      <Header fetchData={fetchData} allStrains={allStrains}/>
      <section>
        <section className="card-container">
          <section>
            <section className="main-page-boxs">
             <Link to="/hybrids">
                <img className="main-hybrid-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXahi8J7X1p9Vtp1gPPW1_Otr7-aT9zzDC2Mh_cbQdNO-LH3iO1ECeW-k81g-IiGWH8H0&usqp=CAU" alt="hybrid leaf"/>   
                <h2>Hybrid</h2>
                <p>Combination Strains</p>
             </Link>
            </section>
          </section>
          <section  className="sativa-indica-container">
            <section className="main-page-boxs">
                <Link to="/sativas">
                  <img className="main-sativa-image" alt="sativa leaf" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrn3bsFglsiR-s-Q2aoHpUMRG-OGKA3sWoZg&usqp=CAU"/> 
                  <h2>Sativa</h2>
                  <p>Combination Strains</p>
                </Link>
              </section>
              <section className="main-page-boxs">
                <Link to="/indicas">
                  <img className="main-indica-image" alt="Indica leaf" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFRgWFRYVGRgaGRkeHBkcHBohGhwfHBgfHRkZIRwcIy4mHh8rHxgeJzgmKzA0NjU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs9NDE0PTo0NDQ9NjQ0NjQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBFAMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABAEDBQYHAv/EADwQAAIBAgQDBgQFAgUEAwAAAAECAAMRBBIhMUFRYQUGInGBkRMyQqFisdHh8FLBByNysvEzgpLCFBYk/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAJxEBAQEAAgIBBAIBBQAAAAAAAAECAxEhMUEEEiJRE2FxFCMzgcH/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERAREQERECkrKSJg8YtQuF+h8p62Aufe49JHcl6EyIiSEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERKQIXamOWjTZiQDlbKDxIUkD7TVu5eLvVcf1re/ElTv8Adpj+/HaGev8AD4UwB/3MAxPsVHoZgsFj2pNmRip5jzBselwJi5N/7k/px1v8v8OyRLVGoGVWGzAEeRFxLs2uxERAREQEREBERAREQEREBERAREQEREBERAREQERLNasiC7MFFwLkgC50AuYF6JS8rAREQERECk1Dv/jXppSKkjxk5hwIXT11PtNvnK+2KjO1SmzHLnY5Tc2bMRm6HU+8z/Ub+3PX7c+TXUYjtHEtVb4jMCzWzE9AANugkdNTbrqf3hAR4STy6SpfLsBfn+8x9+O2a10bun22artRIUKlNMgGpAXwm54nVZtk5D2Nj6mHVmSwdxbORcqL3sL6fY7CdZoMSoJ3IF/O2s2cHJ9+er7jRxa+6L0RE0OpERAREQEREBERAREQEREBERAREQEREBERApIXa2E+NRqU9LspAvwbdT6EA+knShkWdzocm7F70VsP4dClx4GPy2vmUH6f223nRcF23RqqhDgF72U73GhXzv78Jynt1ab16ppZlVnYsrABle/jAsT9V9NN7cJASsUNiSCLc5izy6x49xmm7nw7zE5x2b3wqhqec5lRcrc2/Hc/Va335zoOFxC1EV1N1IuDNWOTOvTvnU16X4iJ0WYTvXiWp4WoyEgjKLjcXYA/YzmVfFsxzsbsT4mIGvXTjN2789rU1VsMwbNURWVhYgEPoCL3tddxznOqFQar/Oh0nnfU3vfUrNzXyu4lhcMNtLyxhxe0qlRluCdpZFQ2st/502nL46cGTwzAvcgELwPHmD0nRu6/a9TEGpny2VUIAFgM2a/X6ec5ij5FA4nT+aTeO6PadGlamQ5eowBawsOCDe9td+bGX4Ndbnd6jtxXqt7iInptSkRMdX7Yornu48AuwG+9rDmbkDzIkXUntFsjIzFdrdt0sOPEbtwQfMf0HUzTe0u+dUtdLKovZeJ0IueZG9ttJiuxcMcRiEDlmLNma+pyjxNck8bW9fSZ7z9+Mud5e/GXTeycRUqU1qOoUt4go4KflBJ3NteG8nwImieI6qxESQiIgIiICIiAiIgIiICIiAiIgck774WkMU7UXHxDb4lNlYWbKNQxFiGFjYcbm+umuspbhZxsOY5fpOkd/e7ZrqK9Af5yDUDQuvL/AFDccxccrc2GII8NVSDwJuP3BmDlzc67vyycmetL2He2vOx+0zmE7arKq00YgIxYAb3Jvc9Ndupmv4gZbOuo+rncn5tJcpVNTY72/ISnrzETx6dl7F7SWvTDC19mHI8fQ7iZKcm7G7dagtRUIu2XX+m19QOZvOi93+0vj0Vc/N8reY/UEH1mvi5prxfbRjf3ePlpP+KNIrUo1ANCrLf/AEm9vZyfQzQq1UizDhz0uOPHh+s2Lt7tLEM70KzF1R2ADAbqSA17cQfZpg6SpcowsTsb7/z+0ycll3b0z8l70vBs4DKL2/Ly5j9ZbpIw1sTvpxE8U0am+UfI3ynl0ii7NZRrvc8hfeUs8KL9C5OZgRy6TZe6Khq6szKqIc12YC9vlUX3N9fITACmb2v6f8zM9h4I16yUwPDcFv8ASpu3208yJXF/OdTt0x7dclutVVVLMbAAknkBvFRwoJOgAJPQDec67e7ztUpuhAClgVI3yg/KefA36e3pcnLMTz7adamZ5T+0u+GanUVAVYkBG/DfxX5Nb8+lzplas1/mtprqJYq1NQOlz+8sI9yS5BHTj0mG3W73WTWrr2kUFLnM2w24+s27/D8oK7hULMUN3J0VbjQC3E29vOaiVZtSQq+xP6ToHcCpQyutJXzaF2IFjvlAI9TbznTin5xPFPyjdIiJvbCIiAiIgIiICIiAiIgIiICIiAiIgYPvV2U2Jw7IjFXHiXUgEj6T0I0vwNjwnH/iFSUqoQVNmDDUNyI4Gd7nLf8AELEstcLUoIFI8FQLcuvEFuJB+nhe/ETL9Rmdfd8uPLnx21qjRX6G04qdV8uY+8sVqZRgOB2/S/P9ZRKdM6o+U8txPVVWKlXHUMutiNjpr56bTNPLPKuo/iPDwzZO7/eM4enkABu4ZieVlBUDgfCdevSaYlUhrHQ2t/L8JJpucvHf+8nu5vcTNWXw2HvViMPiK3xaJa7KCwZbAkABWBvxW3t1mvVcOHFgcrg6E7+REl4xkJQIpAyKLnW7gePyB4f2kasubVTZhw5jkf1i26vZq93t5oVCRkqCxvvxBHI7SqELdUBuWOvHeVWrnFx8w0IOl7cNdj/xI7uUJAN2JPS2p+0pr0r8JyVLeEG7fUdNBNk7m9quuIWjTRLM3jchi2VQWIvmsBYctyJpDYjL4U1J3685l8BWbDUmdHtVdlF1OqIDma55s4XTktuJleO3Ou1sa6vbb+8veJ/i1qan/Ly5GB2vbVhyNyR6TTcdUuBx1nnE4oszsbXYlmPVjdj01kau+oGpPDnLXV3ruo1q6o5ZmsNNLEnh1l04pV8KLmI00GvnKLSQDxkk/UL2F/TX7y5SxS2tSQHraw9+MvfEFzs3svEYqoFuqA75iAAOdr3Y/hG87F2N2YmGpLSThueLHixtxP2FhsJoHdruvWxDK9a60d9xd/wqAdBzJt0HEdNpoFAAAAAAAGwA2E1cGep3Y0cOep3YuxETQ7EREBERAREQEREBERAREQEREBERApMb27hKVSi61qZqKATlA8VwN1IIIbkQbzJRIs7nQ4PWwNBmJUslybXa5HIZrAN52lv/AOG6/K6sOR/UfpOid8+wl0rU6IO5fKSCepUfN56maI/wzqCV6g6f3E8zedZ11WPebmsbi6DkhsrXG9tbr6cR/OEUj4QOsySnk4aY/EUyhtshOm2h4r5cRJ77V9vNeqyuDfwWGYcuTdNd+l5Iqr9a7jf9ZEd/m8uM9YSv4ARfS++4HI+UmQXWObUfNx6268/51EOqjBiEFzc3Y2sNdpNy3Iyg6kacvL+aS3TqW3IOpsB585W+EfDzh8EVGY7/AJTy9fMegNgRx5n3Bl+viAFs+t9LeY2FvzkZFAAtGYVV6ts3lLi0z8zMVJ2GXUD30P7RSpZjmzAD3uQfPb+46ayGan9T36CTPB6RXop818x/Frf02+0kYZq9VlSlTYsdAALsfTgvU2A3Mv4dEv4KZ8yNfvNy7q9nYzOGQGilxmzrowB2CnUnrpa514ScS6110nGbq9Nk7pd3zhKfictUaxexOQH+kDbTna56DSbFET0cySdRtkknUViIkpIiICIiAiIgIiICIiAiIgIiIFIlutWVAWZgqjckgAepmGxXenCp9ZY8kBP32+8rrUnuotk9s7E1Cv37oLbKrsCNdhY66een3kev39UFctIlSPFmNiDc6CwIOlj68JzvPxz5V+/P7bqygixnO+9vdqorNWpFSDulgD6Nx8jbzmQw3ftC5V0IS5sw+YDhmXjpvY+8uUO+eHqo4qqVIViBcFWsPlDaWY8j7ym+Ti3OrUaudTq1zZz/AFIQeYBB9bShVXUjMSD7jiD6GbF2l2dh6l6uGcqx1ZDw53U7eY0mAq0yDdlF/wCocf1mSzqs2s3PmMPUJVirbjfrpv5RQcq+mxAPS+xH5exkvH0c65lPiUafiHFf066cZi1a4uCeenEcR/OUtFWWRgCCNrj01mNSuQAFF226DSSaLkXtyJ+0iA+EnjaNe0vTEl7twX0udZJpKGtroLXt1+kdTrrw18pGw6fTx/a7H8zJKEaAL4Rf5rA9SepsPLTlFvSP7XyU2s56DYchZbSVQQ/Sir1P7SGMUBuw9Bt6zcsFgsDRCtiKj1HIDfDylW52ZL3X1YA9Ykuv6TmdvHYfdmrigGFSmtO9iQbsOmUbHzI9Z1DA4X4VNUzM2UAZmN2NuJPGa8nejCUkUUkOqhsiqoy3GzWNgedrz23fKgFU2YsRcqLWXoWNvtNONcWPny0ZuM/LZ5SYCj3rwxQMzFSd1sSRqRqQLcJl8HjEqqHpsGU3sdRsbHfXcTtnedeq6TUvqpUSkrLrEREBERAREQEREBERAREQEREChEwnavdyhWBOUK39S6H7TOSkjWZqdVFnbkPbPZDUGs1it9yDeYp6a8C3lY2/WdoxuDWopBAM0ntXuuQc1PKnko1/KYuT6azzlx3xfppBoNuNeXAn3lh2IvcMBxBBt77TMY/B1KerlQL2vc+wFpD+IP6j7TLc2XqxxubPbGpWIPzEHWzDqLfkZ5pVDfxa8xx81P3ttJ1bDow1T12PuNZHOBH0tr119LiJYr6R6FUsL7njbQ+f7SPXphWDC9ideh39jr635iSGwzqc1j5rr+/2lUqKwyPa+3IH14Hl6Wl5SRZJGVrD6HI6eA3lj4YFFL7vmY+9h9rS58JhmU6kB8vC4ZGA04WK2I53kl0XMTeyoAiHgMuhbqc17W4+Ut34Wk8LVKlY2G+lz/6i3I79fIGea2RNCCzcRfTyP6S1WrZvAl8vQeI+dtvKeqeEfQ2C8sx++n95Xv8Aat/pcbxgKFUHlbbnrJYc89SbsxP3JPGKWEFvnvzy2H53/tJKUUUWKHzPi/OVuorYpTrXFluV4ka39RJSFjwsOV55UsflKn7faTsJ2ZiX0XDufNWUe7WEr1deomZtRyhO5PkBMl2b2TiHINJKgPBh4QP+7SbT2V3Mo5VaqKmYjVCy2B4i6jX3m20KKqoUXsAALkk2G2p1M1cf01vnXhoxw/tr/Y2Fx9MgVHpunJmYt/5Bb38yZssCJtzPtnTvJ1OlYiJZJERAREQEREBERAREQEREBERAS3UphhYy5EDDYrshG3APmJgsb3aRgbDKeagX+4m6zyyAyusZ17RZ25lie6TAEoxZuAcjL62W8gv3ZxFifDpsq8fVrTq/wBPDYYTlfp8VS8crlKd3MRxCDzYk/lI+P7DVReuyDl4cxPlsZ0nteotGk9RhcKNBzJNgPczn9GhVxdYAeJn1/Cqjc9FH81MzcuM4szmd2uWs5nie2CFNFzFs5VQcraXFxa255Dcn5ekhVMN4rMjFV0VSfl0/ptva2pufSdD71dgpSpoqDQJYk7sb/Mepk9uwqdZUzgghRZha+q8eYub/AMMp/Dvu5l8z/wBTeK/a53h6VNrKHCdCug/8Tp7TLjuviCbeGx2dT7XB/teXe1uwHpMQ67AsHUaFQQM3SxYXB2uPOZXuV2gUqDDvdlb5STopAJ06G23OV4+vu+3c6qmZO+tRif8A6lit8tJ/Jire5W33mXTuRU3Stl/CyXt0vm19p0EYcS6FAm3/AE3H8x3/AIstawfdKhkX4iKzgasC6g9coawmwYfDqihVFgAABroBsLmX7RO0xnPqLzMnpWIiWSREQEREBERAREQEREBERAREQEREBERAREQEREBERA0r/EFyRQpjMS7NZRxIyqB53ew85me7vYi4ZNfFUa2ZvyUdBf19gJeO7MSrUo1GveizMo55ltY+tj5qJPE4zin8l3f+lZn8rWB73070b8iPzEyGDoA00P4E/wBokbvSP/zP0K/7hJ/Z3/Sp/wChf9olZ/zX/EWXPhixBAIOhB2M0nvJ3UZP87CLqpzGmNwRrmT1Hy+3I73E6cnHnc8ouZfaH2VjPjUadW1s6KxHIkaj0NxJk8UqYUWAAFybDmTc+5JPrPcvPSVYiJIREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERECPi8MtRSjC4O+pGxvwnulTCqFGgUADyAsJWJHU9i5ERJCIiAiIgIiICIiAiIgIiICIiAiIgf//Z"/>
                  <h2>Indica</h2>
                  <p>Combination Strains</p>
                </Link>
              </section>
          </section>
        </section>
      </section>
    </section>
  );
}
export default Welcome