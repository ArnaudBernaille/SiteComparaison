const Container= () => {
    return ( 
        <div className="container">
            <h2>Poster une comparaison</h2>
            <div className="row">
                <div className="col-sm">
                <form>
                    <div className="form-group">
                    <label htmlFor="Titre">Titre : </label>
                    <input type="text" className="form-control" id="Titre" aria-describedby="emailHelp" placeholder="Titre" name="Titre" />
                    <small id="emailHelp" className="form-text text-muted">Donner un titre clair maximise le nombre de feed backs !</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="Contenue1">Contenue1 :</label>
                    <input type="text" className="form-control" id="Contenue1" placeholder="Le contenue osef on mettra plus de truc après" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="Contenue2">Contenue2 :</label>
                    <input type="text" className="form-control" id="Contenue2" placeholder="Le contenue osef on mettra plus de truc après" />
                    </div>
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="Contenue2">je confirme que je possède les droits d'auteurs de mon contenue</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onclick="postComparaison()"> Poster la comparaison </button>
                    </form>
                </div>
                </div></div>

     );
}



export default Container;