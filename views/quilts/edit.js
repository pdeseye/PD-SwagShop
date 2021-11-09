<%- include('../partials/header') %>

<h3>Edit <%= quilt.title %> </h3>

<div class="edit-art-div">
    <form id="edit-art-form" action="/quilts/<%= quilts.id %>?_method=PUT" method="POST">
        <div class="form-item">
            <label>Title:</label>
            <input type="text" name="title" value="<%= quilt.title %> ">
            <br>
        </div>
        <div class="form-item">
            <label>Created:</label>
            <input type="text" name="created" value="<%= quilt.created %> ">
            <br>
        </div>
        <div class="form-item">
            <label>Image Url:</label>
            <input type="text" name="imageUrl" value="<%= quilt.imageUrl %> ">
            <br>
        </div>
        <div class="form-item">
            <label class="description-label" for="description">Description: </label>
            <textarea id="description" name="description" cols="30" rows="4" ><%= quilt.description %></textarea>
            <br>
        </div>
        <div class="form-item">
            <input class="btn" type="submit" value="Add Piece">
        </div>
    </form>
</div>

<%- include('../partials/footer') %></input>