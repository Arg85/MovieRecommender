const useGenres=(selectedGenres)=>{
if(selectedGenres.length<1) return ""
const GenreId=selectedGenres.map((g)=>g.id)
return GenreId.reduce((acc,cur)=>acc=acc+","+cur)

}
export default useGenres;