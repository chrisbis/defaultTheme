const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;



/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */
registerBlockType('kleber/tab-list', {
	title: 'Tab List',
	icon: 'smiley',
	category: 'common',
	attributes: {
		header1: { type: 'string' },
		header2: { type: 'string' },
		header3: { type: 'string' },
		header4: { type: 'string' },
		header5: { type: 'string' },
		content1: { type: 'string' },
		content2: { type: 'string' },
		content3: { type: 'string' },
		content4: { type: 'string' },
		content5: { type: 'string' }
	},

	/* This configures how the content and color fields will work, and sets up the necessary elements */
	edit: function(props) {
		function updateContent(event) {
			props.setAttributes({ header1: event.target.value });
		}

		  function createInput(value, onChange) {
		    return React.createElement("input", {
		      type: "text",
		      value: value,
		      onChange: onChange
		    });
		  }

		  function createHeader(header) {
		    return React.createElement("h4", null, header);
		  }

        return React.createElement('div', null, 
            React.createElement('h4', null, 'Tab List'),
            // createHeader('Header 1'),
            // createInput(props.attributes.header1, updateContent)
        );
	},
	save (props) {
		return (
            <Fragment>
                <div>Test</div>

            </Fragment>
            /* 
			<div>
				<div class="tabArea">
					<ul class="nav nav-tabs bar-tabs">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#produktinfo">
								{props.attributes.header1}
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#groessenfarben">
								Größen und Farben
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#anpassung">
								Individuelle Anpassung
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#pflege">
								Pflegehinweise
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#versand">
								Versand
							</a>
						</li>
					</ul>

					<div class="tab-content">
						<div id="produktinfo" class="tab-pane fade show active">
							<div class="row">
								<div class="col-md-12">
									<p>Produktinfo</p>
								</div>
							</div>
						</div>

						<div id="groessenfarben" class="tab-pane fade">
							<div class="row">
								<div class="col-md-12">
									<p>
										Die pettiCap® gibt es aktuell für Frauen in den Größen XS, S, M und L&nbsp;in
										den Farben hautfarben und schwarz.
									</p>
								</div>

								<div class="col-md-12">
									<p>Für Männer wird sie zu einem späteren Zeitpunkt angeboten.</p>
								</div>
							</div>
						</div>

						<div id="anpassung" class="tab-pane fade">
							<div class="row">Anpassung</div>
						</div>

						<div id="pflege" class="tab-pane fade">
							<div class="row">
								<div class="col-md-12">
									<p>
										Die pettiCap® sanft per Hand mit einem milden Feinwaschmittel waschen und an der
										Luft trocknen. Nicht Waschmaschinen und Trockner geeignet.
									</p>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<p>
										<a
											href="downloads/Pflege-Etikett.pdf"
											target="_blank"
											title="pettiCap Pflege-Etikett"
										>
											Download Pflege-Etikett (PDF)
										</a>
									</p>
								</div>
							</div>
						</div>

						<div id="versand" class="tab-pane fade">
							<div class="row">
								<div class="col-md-12">
									<p>
										Wir versenden 1-2 Tage nach Zahlungseingang per DHL. Wenn Ihre Bestellung
										verschickt wurde, erhalten Sie per E-Mail eine Benachrichtigung mit der
										Sendungsnummer.
									</p>
									<p>Rücksendung nur im Originalzustand (ohne individuellen Zuschnitt) möglich.</p>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<p>
										Land: zzt. nur innerhalb Deutschlands möglich<br />
										Versandkosten: 5,49 EUR<br />
										Lieferzeit: 3-4 Werktage
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
         */);
        
	},
});
