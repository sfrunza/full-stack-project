require 'carrierwave/orm/activerecord'

class PictureSerializer < ActiveModel::Serializer
  attributes :id, :image_name, :photo, :image_description
end
